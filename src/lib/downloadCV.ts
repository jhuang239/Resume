const fileLink =
    "https://drive.google.com/file/d/1NAk3T61RE6QcR0nKY7Non9L4xQhXazpI/view?usp=sharing";

export const downloadCV = async () => {
    try {
        // Extract the file ID from the Google Drive link
        const fileId = fileLink.split("/d/")[1].split("/view")[0];

        // Create a direct download link
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

        // Open the download URL in a new tab
        window.open(downloadUrl, "_blank");
    } catch (error) {
        console.error("Error downloading CV:", error);
    }
};
