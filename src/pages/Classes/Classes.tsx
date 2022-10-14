import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { MainAppStore } from "../../interfaces";
import { getAllInstructorClasses } from "../../redux/actions/class.actions";
import InstructorClasses from "./InstructorClasses";

export default function Classes() {
    const { my_classes } = useSelector((state: MainAppStore) => state.classes);
    const { user } = useSelector((state: MainAppStore) => state.auth);

    useEffect(() => {
        if (user) {
            getAllInstructorClasses(user?.id);
        }
    }, [user]);

    return (
        <Layout full_screen>
            <InstructorClasses classes={my_classes} />
        </Layout>
    );
}
