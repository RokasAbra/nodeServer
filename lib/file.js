const file = {};

file.create = () => {

};
file.read = async (dir, fileName) => {
    try {
        const filePath = file.fullPath(dir, fileName);
        const fileContent = await FileSystem.readFile(filePath, 'utf-8');
    } catch (error) {
        
    }
};
file.update = () => {

};
file.delete = () => {

};

export {file}