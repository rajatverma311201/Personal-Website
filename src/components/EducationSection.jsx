import React from "react";
import styles from "./EducationSection.module.scss";
import { motion } from "framer-motion";

import { MdOutlineSchool } from "react-icons/md";
import { EDUCATION_LIST } from "@/assets/data";
const EducationSection = () => {
    return (
        <section className={styles["container"]}>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
                className={styles["education-icon-container"]}
            >
                <MdOutlineSchool className={styles["education-icon"]} />
            </motion.div>
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.75,
                    duration: 0.5,
                }}
                className={styles["education-main-heading"]}
            >
                My{" "}
                <span className={styles["heading-highlight"]}>Education</span>
            </motion.h2>

            <div className={styles["edu-list"]}>
                {EDUCATION_LIST.map((edu, idx) => (
                    <EduCard edu={edu} idx={idx} key={idx} styles={styles} />
                ))}
            </div>
        </section>
    );
};

export default EducationSection;

const EduCard = ({ edu, idx }) => (
    <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 * idx + 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
            delay: 1 * idx + 0.25,
            duration: 0.5,
        }}
        className={styles["edu-container"]}
    >
        <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 1 * idx + 0.75,
                duration: 0.5,
            }}
            className={styles["edu-heading"]}
        >
            {edu.institute}
        </motion.h3>
        <h4 className={styles["edu-degree"]}>
            <span className={styles["edu-degree__short"]}>
                {edu.degreeShort}
            </span>
            <span className={styles["edu-degree__long"]}>
                ({edu.degreeLong})
            </span>
        </h4>
    </motion.div>
);
