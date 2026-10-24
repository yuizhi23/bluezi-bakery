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
            print("Failed to create output CGImage")
            return
        }
        
        let rep = NSBitmapImageRep(cgImage: outputCG)
        rep.size = inputImage.size
        guard let pngData = rep.representation(using: .png, properties: [:]) else {
            print("Failed to encode PNG")
            return
        }
        try pngData.write(to: URL(fileURLWithPath: outputPath))
        print("Successfully lifted subject: \(outputPath)")
    } catch {
        print("Error: \(error)")
    }
}

liftSubject(inputPath: "assets/crops/strawberry_choux.jpg", outputPath: "assets/crops/strawberry_choux_lifted.png")
