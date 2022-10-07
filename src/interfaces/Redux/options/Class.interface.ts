export interface ClassData {
    id: number;
    attributes: {
        title: string;
        description: string;
        thumbnail_sm: string;
        thumbnail_lg: string;
        thumbnail_fx: string;
        max_price: number;
        createdAt: string;
        updatedAt: string;
    };
}

export interface ClassCategory {
    id: number;
    attributes: {
        name: string;
        image_url: string;
        slug: string;
        class_sub_category: ClassCategory[];
        class_category: {
            data: ClassCategory;
        };
    };
}

export interface ClassSubCategory {
    id: number;
    attributes: {
        name: string;
        image_url: string;
        slug: string;
        class_category: {
            data: ClassCategory;
        };
    };
}

export interface ClassSyllabus{
    id?: number | null;
    isNew?: boolean;
    attributes: {
        title: string;
        index: number;
        description?: string;
        class?: ClassData
    }
}
