import {PageSection, SectionComponent, Button} from './HomePageStyles'
import React from "react"
import styled from "styled-components"

const CtaBannerTitle = styled.h2`
    color: black;
    padding-top: 2%;
    padding-bottom: 15%;
    margin: 0;
`;
const CtaBanner = () => {

    return(
        <PageSection>
            <SectionComponent alignItems="center">
                <CtaBannerTitle>
                    Ready to build the future?
                </CtaBannerTitle>
                    <Button>
                        Get started
                    </Button>
            </SectionComponent>
        </PageSection>
    )

}

export default CtaBanner
