// Function to convert image file to base64
export function convertImageToBase64(
  file: File,
  callback: (base64String: string) => void
) {
  const reader = new FileReader()
  reader.onload = function (event) {
    callback(event.target?.result as string)
  }
  reader.onerror = function (error) {
    console.error('Error occurred while reading the file:', error)
  }
  reader.readAsDataURL(file)
}
