import '../styles/Tag.css';

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
         PersonalDevelopment: { backgroundColor: "#6a1b9a" },
        Work: { backgroundColor: "#ff6f61" },
        Fitness: { backgroundColor: "#ffbd69" },
        Household: { backgroundColor: "#78d237" },
        Social: { backgroundColor: "#03a9f4" },
        Hobbies: { backgroundColor: "#ff8a80" },
        Finance: { backgroundColor: "#8e24aa" },
        Travel: { backgroundColor: "#ffeb3b" },
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
