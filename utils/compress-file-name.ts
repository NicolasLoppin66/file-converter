export default function compressFileName(fileName: any): string {
    // Define the maximum length for the substring
    const maxSubstrLength = 18;

    // Check if the fileName is longer then the maximum length
    if (fileName.length > maxSubstrLength) {
        // Extract the first part of the fileName (before the extention)
        const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.')

        // Extract the extension from the fileName
        const fileExtension = fileName.split('.').pop()

        // Calculate the length of character to keep in the middle
        const charsToKeep = maxSubstrLength - (fileNameWithoutExtension.length + fileExtension.length + 3)

        // Create the compressed fileName
        const compressFileName = fileNameWithoutExtension.substring(
            0, maxSubstrLength - fileExtension.length - 3
        ) + '...' + fileNameWithoutExtension.slice(-charsToKeep) + '.' + fileExtension

        return compressFileName
    } else {
        // If the fileName is shorter than the maximum length, return it as is
        return fileName.trim()
    }
}