
const icons = import.meta.glob('../../assets/icons/*.svg', {
    eager: true,
    query: 'react',
    import: 'default'
})

const Icon = ({ icon, className = '', ref }) => {
    const iconKey = `../../assets/icons/${icon}.svg`;
    const SVGIcon = icons[iconKey];

    if (!SVGIcon) {
        console.warn(`Icon "${icon}" not found`);
        return null;
    }
    return <SVGIcon className={`${className}`} ref={ref} />
};

export default Icon;