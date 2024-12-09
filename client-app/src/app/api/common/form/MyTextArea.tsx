import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    rows: number;
    label?: string;
}

export default function MyTextArea(props: Props) {
    const [field, metal] = useField(props.name);
    return (
        <Form.Field error={metal.touched && !!metal.error}>
            <label>{props.label}</label>
            <textarea {...field} {...props}/>
            {metal.touched && metal.error ? (
                <Label basic color='red'>{metal.error}</Label>
            ) : null}
        </Form.Field>
    )
}