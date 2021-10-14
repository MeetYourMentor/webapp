import * as React from 'react';
import { DocumentCard, DocumentCardActivity, DocumentCardDetails, DocumentCardPreview, DocumentCardTitle, DocumentCardType, PrimaryButton } from '@fluentui/react';
import history from './history';
import "./Home.css";

export class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
                <nav className="Home-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p className="Home-text">Meet your mentor</p>
                </nav>
                {/* <DocumentCard
                    aria-label="Document Card with icon. Register as mentor."
                    type={DocumentCardType.compact}
                    onClickHref="http://bing.com"
                >
                    <DocumentCardPreview {...previewPropsUsingIcon} />
                    <DocumentCardDetails>
                    <DocumentCardTitle title="View and share files" shouldTruncate />
                    <DocumentCardActivity activity="Created a few minutes ago" people={[people[2]]} />
                    </DocumentCardDetails>
                </DocumentCard>
                <DocumentCard
                    aria-label="Document Card with icon. Register as mentee."
                    type={DocumentCardType.compact}
                    onClickHref="http://bing.com"
                >
                    <DocumentCardPreview {...previewPropsUsingIcon} />
                    <DocumentCardDetails>
                    <DocumentCardTitle title="View and share files" shouldTruncate />
                    <DocumentCardActivity activity="Created a few minutes ago" people={[people[2]]} />
                    </DocumentCardDetails>
                </DocumentCard> */}
                <PrimaryButton className="regBut" onClick={() => history.push('/RegisterMentor')}>Click button to register as Mentor</PrimaryButton>
                <PrimaryButton className="regBut" onClick={() => history.push('/RegisterMentee')}>Click button to register as Mentee</PrimaryButton>
            </div>
        );
    }
}