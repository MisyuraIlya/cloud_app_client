export const getExtenstionFromFileName = (filename: string) => {
    return filename.split(".").pop();
}