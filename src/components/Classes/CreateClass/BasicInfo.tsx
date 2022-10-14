import { Select as Sell } from "@chakra-ui/react";
import Select from "react-select";
import { MainAppStore } from "../../../interfaces";
import { getAllClassOptions } from "../../../redux/actions/options.actions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FormsProps } from "./CreateClass.interface";
import { class_difficulty } from "../../../CONSTANTS";


export function BasicInfo({ ready }: FormsProps) {
    const { class_categories, class_sub_categories, class_languages } =
        useSelector((state: MainAppStore) => state.options);
    const { user } = useSelector((state: MainAppStore) => state.auth);

    const [classData, setClass] = useState({
        title: "",
        description: "",
        category: { id: null },
        sub_categories: null,
        instructor: user?.id,
        difficulty_level: null,
        language: null,
        // min_price: 0,
        // max_price: 0,
        // thumbnail_lg:
        //     "https://freepikpsd.com/file/2019/10/empty-image-png-7-Transparent-Images.png",
        // thumbnail_sm:
        //     "https://freepikpsd.com/file/2019/10/empty-image-png-7-Transparent-Images.png",
    });

    console.log(classData);

    useEffect(() => {
        (async () => {
            await getAllClassOptions();
        })()
    }, []);

    useEffect(() => {
        const {
            category,
            description,
            difficulty_level,
            language,
            sub_categories,
            title,
        } = classData;

        if (
            title &&
            description &&
            difficulty_level &&
            language &&
            sub_categories &&
            category.id !== null &&
            ready
        ) {
            ready(classData);
        }
    }, [classData, ready]);

    const setClassData = (data: any) => {
        setClass({ ...classData, ...data });
    };

    return (
        <form className="contact-form row y-gap-30">
            <div className="col-12">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Class Title*{" "}
                    <small className="text-muted fw-400">
                        {classData.title.length}/80
                    </small>
                </label>
                <input
                    type="text"
                    placeholder="Learn Figma - UI/UX Design Essential Training"
                    onChange={(e) => setClassData({ title: e.target.value })}
                    required
                    value={classData.title}
                    maxLength={80}
                />
            </div>
            <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Class Category*
                </label>

                <Select
                    options={class_categories.map((val) => ({
                        value: val,
                        label: val.attributes.name,
                    }))}
                    onChange={(e) => setClassData({ category: e?.value })}
                    placeholder="Tech / Marketing / Math .Etc"
                />
            </div>
            <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Class Subcategories*
                </label>

                <Select
                    closeMenuOnSelect={false}
                    options={class_sub_categories
                        .filter(
                            (x) =>
                                x.attributes.class_category.data.id ===
                                classData?.category?.id,
                        )
                        .map((val) => ({
                            value: val,
                            label: val.attributes.name,
                        }))}
                    onChange={(e: any) => {
                        setClassData({ sub_categories: e });
                    }}
                    isDisabled={classData.category.id === null}
                    isMulti
                />
            </div>
            <div className="col-md-12">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Class Description (short)*{" "}
                    <small className="text-muted fw-400">
                        {classData.description.length}/110
                    </small>
                </label>

                <textarea
                    placeholder="Ex. In this class I will teach you XYZ.."
                    onChange={(e) =>
                        setClassData({ description: e.target.value })
                    }
                    maxLength={110}
                    rows={2}
                />
            </div>
            <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Class Difficulty Level*
                </label>


                <select placeholder="Select option" onChange={(e) => setClassData({ difficulty_level: JSON.parse(e.target.value) })}>
                    <option>Select One</option>
                    {
                        class_difficulty.map((val) => {
                            return <option key={`level-${val.value}`}
                                value={JSON.stringify(val)}>{val.value}</option>;
                        })
                    }

                </select>
            </div>
            <div className="col-md-6">
                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Class Language*
                </label>

                {/* <Select
                    options={class_languages.map((val) => ({
                        value: val,
                        label: val.attributes.name,
                    }))}
                    onChange={(e) => setClassData({ language: e?.value })}
                /> */}
                <select placeholder="Select option" onChange={(e) => setClassData({ language: JSON.parse(e.target.value) })}>
                    <option>Select One</option>
                    {
                        class_languages.map((val) => {
                            return <option key={`language-${val.id}`}
                                           value={JSON.stringify(val)}>{val.attributes.name}</option>;
                        })
                    }

                </select>
            </div>
        </form>
    );
}
