const imagePreviewElement = document.getElementById('image-preview');
const filePickerElement = document.getElementById('image');

function showPreview() {
    const files = filePickerElement.files;

    if (!files || !files.length) {
        imagePreviewElement.style.display = 'none';
        return;
    }

    const file = files[0];
    imagePreviewElement.src = URL.createObjectURL(file);
    imagePreviewElement.style.display = 'block';
} 

filePickerElement.addEventListener('change', showPreview);