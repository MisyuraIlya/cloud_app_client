const extColor = {
    pdf: "purple",
    xls: "green",
    doc: "blue",
    txt: "blue",
    png: "orange",
    jpg: "orange",
    jpeg: "orange",
    zip: "red"
} as const;

export type Extenstion = keyof typeof extColor;
export type Color = typeof extColor[Extenstion]

export const getColorByExtenstion = (ext: string): Color => {
    return extColor[ext];
}