import * as React from 'react';
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardDetails,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
    DocumentCardType,
    IDocumentCardActivityPerson,
    IDocumentCardDetailsProps,
    IDocumentCardProps
  } from '@fluentui/react/lib/DocumentCard';

  import { getTheme } from '@fluentui/react/lib/Styling';
import { Image, ImageFit } from '@fluentui/react';

const text1 = "Meet Your Mentor is a great way to find the right Mentor based on the superpower  you are looking for."
const text2 = "We have a curated set of mentors with unique “superpowers”."
const text3 = "Mentees can choose the right mentor based on the superpower they want to acquire."
const text4 = "Click below to register either as a mentor or mentee or both!"
const theme = getTheme();

const previewOutlookUsingIcon: IDocumentCardPreviewProps = {
  previewImages: [
    {
      previewIconProps: {
        iconName: 'OutlookLogo',
        styles: {
          root: {
            fontSize: theme.fonts.superLarge.fontSize,
            color: '#0078d7'
          },
        },
      },
      width: 144,
    },
  ]
};

export const Home = () => {
    // This just hides the header
    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
            const header = document.getElementById('App-Header');
            header!.style.display = 'none';
        }
    })

    return (
        <div className="Home">
            <Image src="images/MentXBanner.png" imageFit={ImageFit.cover}/>  
            <div className="Home-header">
                <div className="Home-text-2">
                    <div>{text1}</div>
                    <div>{text2}</div>
                    <div>{text3}</div>
                    <div>{text4}</div>
                </div>
            </div>
            <div className="Home-cards">
                {/* <PrimaryButton className="regBut" onClick={() => history.push('/RegisterMentor')}>Click button to register as Mentor</PrimaryButton>
                <PrimaryButton className="regBut" onClick={() => history.push('/RegisterMentee')}>Click button to register as Mentee</PrimaryButton> */}
                <div className="card">
                    <div className="cardTitle">
                        Become a mentor
                    </div>
                    <DocumentCard type={DocumentCardType.compact} onClickHref="/RegisterMentor" >
                        <DocumentCardPreview {...previewOutlookUsingIcon} />
                        <DocumentCardDetails>
                            <DocumentCardTitle title="For mentors" showAsSecondaryTitle className="titleFirstText"/>
                            <DocumentCardTitle title="Mentor colleagues with your superpowers" className="titleSecondText"/>
                            <DocumentCardTitle title="Register as a mentor" showAsSecondaryTitle className="titleThirdText"/>
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
                <div className="card">
                    <div className="cardTitle">
                        Get mentorship
                    </div>
                    <DocumentCard type={DocumentCardType.compact} onClickHref="/RegisterMentee" >
                        <DocumentCardPreview {...previewOutlookUsingIcon} />
                        <DocumentCardDetails>
                            <DocumentCardTitle title="For mentees" showAsSecondaryTitle className="titleFirstText"/>
                            <DocumentCardTitle title="Get mentored by colleagues and expand your skills" className="titleSecondText" />
                            <DocumentCardTitle title="Register as a mentee" showAsSecondaryTitle className="titleThirdText"/>
                        </DocumentCardDetails>
                    </DocumentCard>
                </div>
            </div>
        </div>
    );
}
