import React, { ReactElement } from "react";

type Props = {
    children?: ReactElement | ReactElement[];
    heading?: string;
    allowNext?: boolean;
    hasPrev?: boolean;
    noControls?: boolean;
    onNext?: () => void;
};

export function StepContainer({
    children,
    heading,
    hasPrev,
    allowNext,
    noControls,
    onNext
}: Props) {
    return (
        <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 animate__animated animate__fadeIn">
            {heading && (
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">{heading}</h2>
                </div>
            )}
            <div className="py-30 px-30">
                {children}
                {!noControls && (
                    <div className="row y-gap-20 justify-between pt-15">
                        {hasPrev && (
                            <div className="col-auto">
                                <button className="button -md -outline-purple-1 text-purple-1">
                                    Prev
                                </button>
                            </div>
                        )}

                        <div className="col-auto">
                            <button
                                disabled={!allowNext}
                                onClick={onNext}
                                className="button -md -purple-1 text-white"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
