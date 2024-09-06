const imageToBase64 = (file: File) => {
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
