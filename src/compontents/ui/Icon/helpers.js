import APP_ICONS from "./icons"

export const getIcon = (name) => {
    return name in APP_ICONS ? APP_ICONS[name]?.image : ""
}