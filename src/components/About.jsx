import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export default function About(props) {
    const [experience, setExperience] = useState("");

    useEffect(() => {
        function calculateExperience(periods) {
            const now = new Date();
            let totalMonths = 0;
            periods.forEach(period => {
                const start = new Date(period.start);
                const end = period.end ? new Date(period.end) : now;
                let months =
                    (end.getFullYear() - start.getFullYear()) * 12 +
                    (end.getMonth() - start.getMonth());
                if (end.getDate() < start.getDate()) {
                    months -= 1;
                }
                totalMonths += months;
            });
            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;
            let result = "";
            if (years > 0) {
                result += years + (years === 1 ? " year " : " years ");
            }
            if (months > 0) {
                result += months + (months === 1 ? " month" : " months");
            }
            return result.trim();
        }

        const workPeriods = [
            {start: "2022-10-10", end: "2023-05-31"},
            {start: "2024-01-01", end: null}
        ];
        setExperience(calculateExperience(workPeriods));
    }, []);

    return (
        <div className="about">
            <span className="hello">Hello,</span>
            <span className="name-det">
        I am <span className="name">{props.name}</span>
      </span>
            <div className="about-det">
                <div className="abt-det">
                    Currently working as a Front End Developer at{" "}
                    <u>Times Internet Limited, Noida</u>, where I focus on advancing my
                    skills and expanding my expertise.
                </div>
                <div className="abt-det">
                    I&apos;m all about making websites look cool and work smoothly. I love
                    turning designs into real, clickable things on the internet. With {experience} of
                    experience with React.js, Next.js and JavaScript.
                </div>
                <div className="abt-det">
                    My code is more than syntax; it&apos;s a language that speaks to
                    users, creating web experiences that seamlessly bridge the gap between
                    technology and human connection.
                </div>
                <div className="abt-det">
                    With a keyboard as my paintbrush and a browser as my canvas, I
                    transform visions into digital reality, one meticulously written line
                    of code at a time.
                </div>
            </div>
        </div>
    );
}

About.propTypes = {
    name: PropTypes.string.isRequired,
};


