export default function formatName(name) {
    const formatted = name.trim().replace(/\s+/g, ' ').split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')

    console.log(formatted)
    return formatted
}