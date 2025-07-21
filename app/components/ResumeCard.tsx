import {Link} from "react-router";

const ResumeCard = ({resume} : {resume : Resume}) => {
    return (
        <Link to={`/resume/${resume.id}`} className={"resume-card animate-in fade-in duration-2000 "}>
            Resume Card
        </Link>
    );
};

export default ResumeCard;