
import '../styles/TaskCard.css';
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
    return (
        <article className='task_card'>
        <div className='task_header'>
            <h2 className='task_title'>{title}</h2>
            <div
                className='task_delete'
                onClick={() => handleDelete(index)}>
                <img src={deleteIcon} className='delete_icon' alt='Delete' />
            </div>
        </div>

        <div className='task_tags'>
            {tags.map((tag, index) => (
                <Tag key={index} tagName={tag} selected />
            ))}
        </div>
    </article>
    );
};

export default TaskCard;
