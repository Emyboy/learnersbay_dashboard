import { ClassScheduleType, MainAppStore } from "../../../interfaces/index";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FormsProps } from "./CreateClass.interface";
import { Box } from "@chakra-ui/react";


export function ClassType({ ready }: FormsProps) {
    const { class_schedule_types } = useSelector(
        (state: MainAppStore) => state.options,
    );
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState<ClassScheduleType | null>({
        id: null,
        attributes: { name: "", slug: "" },
    });

    useEffect(() => {
        if (selected?.id) {
            if (ready) {
                ready(selected);
            }
        }
    }, [selected, ready]);

    useEffect(() => {
        setShow(true);
    }, []);

    if (!show) {
        return null;
    }
    return (
        <div>
            <div className="row">
                {class_schedule_types.length > 0
                    ? class_schedule_types.map((val, i) => {
                          return (
                              <EachClassType
                                  onSelect={(e) => {
                                      setSelected(null);
                                      setSelected(e);
                                  }}
                                  isSelected={selected === val}
                                  key={`schedule-${val.id}`}
                                  data={val}
                              />
                          );
                      })
                    : null}
            </div>
        </div>
    );
}

type EachProps = {
    data: ClassScheduleType;
    onSelect: (e: ClassScheduleType) => void;
    isSelected: boolean;
};

const EachClassType = ({ data, isSelected, onSelect }: EachProps) => {
    return (
        <Box
            cursor={'pointer'}
            className={`button rounded-16 mb-4 p-4 ${
                isSelected ? "bg-purple-1 text-white" : "bg-light-6"
            } eventCard__bg bg-white -outline-purple-4`}
            onClick={() => onSelect(data)}
        >
            <div className="eventCard__content y-gap-10">
                <div className="eventCard__inner">
                    <div className={` eventCard__title text-17 fw-500`}>
                        {data.attributes.name}
                    </div>
                    <div className="d-flex x-gap-15 pt-10">
                        <div className="d-flex items-center">
                            <div className="icon-calendar-2 text-16 mr-8"></div>
                            <div className="text-14">6 April, 2022</div>
                        </div>
                        <div className="d-flex items-center">
                            <div className="icon-location text-16 mr-8"></div>
                            <div className="text-14">London, UK</div>
                        </div>
                    </div>
                </div>

                {/* <div className="eventCard__button">
                    <a
                        href="#"
                        className="button -sm -rounded -purple-1 text-white px-25"
                    >
                        Buy
                    </a>
                </div> */}
            </div>
        </Box>
    );
};
