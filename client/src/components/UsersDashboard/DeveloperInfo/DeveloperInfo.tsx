import { FC } from "react";
import { List } from "semantic-ui-react"

interface DeveloperInfoProps {
    name: string;
    city: string;
    email: string;
    websiteLink: string;
    linkLabel: string;
}

const DeveloperInfo: FC<DeveloperInfoProps> = (props) => {

    const { name, city, email, websiteLink, linkLabel } = props;

    return (
        <List>
            <List.Item>
                <List.Icon name='users' />
                <List.Content>{name}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='marker' />
                <List.Content>{city}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='mail' />
                <List.Content>
                    <a href={`mailto:${email}`}>{email}</a>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                    <a href={websiteLink} target='_blank' rel="noreferrer">{linkLabel}</a>
                </List.Content>
            </List.Item>
        </List>
    )

}

export default DeveloperInfo;