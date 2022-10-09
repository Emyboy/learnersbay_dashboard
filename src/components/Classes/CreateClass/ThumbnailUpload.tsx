import { ClassMediaUploader, PreviewTypes } from "../";
import React from "react";

type Props = {
    thumbnail_url: string;
    ready: (e: any) => void;
    accept: string;
    file?: any;
    previewType: PreviewTypes;
};

export default function ThumbnailUpload({
    thumbnail_url,
    ready,
    accept,
    file,
    previewType,
}: Props) {
    return (
        <div>
            <div className="row y-gap-50">
                <div className="col-12">
                    <ClassMediaUploader
                        imgURL={thumbnail_url}
                        done={(e) => ready(e)}
                        accept={accept}
                        file_data={file}
                        previewType={previewType}
                    />
                </div>
            </div>
        </div>
    );
}
