export const imageToBase64 = (file: File) => {
    return new Promise((resolve) => {
        try {
            var reader = new FileReader();
            reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            resolve(file);
        }
    });
};

export const validateImageResolutions = (
    file: File,
    min: { width: number; height: number },
    max: { width: number; height: number }
): Promise<any> => {
    return new Promise((resolve) => {
        try {
            var reader = new FileReader();
            reader.onloadend = function () {
                var image = new Image();
                image.src = reader.result as string;

                image.onload = function () {
                    var height = image.height;
                    var width = image.width;

                    if (width < min.width && height < min.height) {
                        return resolve({ error: 'image needs to be 600x600 pixels at minimum' });
                    } else if (width > max.width && height > max.height) {
                        return resolve({ error: 'image needs to be 1200x1200 pixels at maximum' });
                    } else if (width / height !== 1) {
                        return resolve({ error: 'image needs to be in 1:1 aspect ratio' });
                    }

                    return resolve(true);
                };
            };
            reader.readAsDataURL(file);
        } catch (error) {
            resolve({ error: 'something went wrong' });
        }
    });
};
