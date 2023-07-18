import os

def rename_photos(folder_path):
    files = os.listdir(folder_path)
    image_extensions = ['.jpg', '.jpeg', '.png']
    i = 1
    for file in files:
        filename, file_extension = os.path.splitext(file)
        if file_extension.lower() in image_extensions:
            new_filename = f"{i}{file_extension}"
            os.rename(os.path.join(folder_path, file), os.path.join(folder_path, new_filename))
            i += 1

if __name__ == "__main__":
    folder_path = "D:\dev\Vanila js\wines catalog\pr_images"  
    rename_photos(folder_path)