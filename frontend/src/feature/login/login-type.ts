export type LoginCredentialProps = {
    userId: string;
    password: string;
};

export interface LoginFormProps {
    setUserDetails: React.Dispatch<React.SetStateAction<LoginCredentialProps | null>>;
}
