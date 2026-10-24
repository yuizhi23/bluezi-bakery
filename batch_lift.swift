import Foundation
import Vision
import CoreImage
import AppKit

func liftSubject(inputPath: String, outputPath: String) {
    guard let inputImage = NSImage(contentsOfFile: inputPath),
          let cgImage = inputImage.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        print("Failed to load \(inputPath)")
        return
    }

    let request = VNGenerateForegroundInstanceMaskRequest()
    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    do {
        try handler.perform([request])
        guard let result = request.results?.first else {
            print("No mask found for \(inputPath)")
            return
        }
        
        let maskPixelBuffer = try result.generateScaledMaskForImage(forInstances: result.allInstances, from: handler)
        let ciMask = CIImage(cvPixelBuffer: maskPixelBuffer)
        let ciInput = CIImage(cgImage: cgImage)
        
        let filter = CIFilter(name: "CIBlendWithMask")!
        filter.setValue(ciInput, forKey: kCIInputImageKey)
        filter.setValue(CIImage.empty(), forKey: kCIInputBackgroundImageKey)
        filter.setValue(ciMask, forKey: kCIInputMaskImageKey)
        
        let context = CIContext()
        guard let outputCI = filter.outputImage,
              let outputCG = context.createCGImage(outputCI, from: outputCI.extent) else {
            print("Failed to create output CGImage for \(inputPath)")
            return
        }
        
        let rep = NSBitmapImageRep(cgImage: outputCG)
        rep.size = inputImage.size
        guard let pngData = rep.representation(using: .png, properties: [:]) else {
            print("Failed to encode PNG for \(inputPath)")
            return
        }
        try pngData.write(to: URL(fileURLWithPath: outputPath))
        print("Successfully lifted subject: \(outputPath)")
    } catch {
        print("Error on \(inputPath): \(error)")
    }
}

let tasks = [
    ("assets/crops/pizza_bread_top.jpg", "assets/crops/pizza_bread_lifted.png"),
    ("assets/crops/twisted_choco.jpg", "assets/crops/twisted_choco_lifted.png"),
    ("assets/crops/strawberry_cheese_bun.jpg", "assets/crops/strawberry_cheese_bun_lifted.png"),
    ("assets/crops/roti_abon.jpg", "assets/crops/roti_abon_lifted.png"),
    ("assets/crops/roti_abon_top.jpg", "assets/crops/roti_abon_top_lifted.png"),
    ("assets/crops/creamy_mushroom_bun.jpg", "assets/crops/creamy_mushroom_lifted.png"),
    ("assets/crops/mango_choux.jpg", "assets/crops/mango_choux_lifted.png"),
    ("assets/crops/cranberry_sourdough_cut.jpg", "assets/crops/cranberry_sourdough_cut_lifted.png"),
    ("assets/crops/double_choco_loaf.jpg", "assets/crops/double_choco_loaf_lifted.png"),
    ("assets/crops/cat_mascot.jpg", "assets/crops/cat_mascot_lifted.png")
]

for (inPath, outPath) in tasks {
    liftSubject(inputPath: inPath, outputPath: outPath)
}
