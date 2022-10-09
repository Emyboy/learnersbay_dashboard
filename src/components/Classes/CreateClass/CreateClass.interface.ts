export interface FormsProps {
    ready: (classData: any) => void;
    onErrorMessage?: string;
    onCheckError?: () => void;
    standalone?: boolean;
}
