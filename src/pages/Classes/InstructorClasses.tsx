import {
    Spacer,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import { EachClassListing } from "../../components/Classes/EachClassListing";
import { Card } from "../../components/UI/Card";
import { ClassData } from "../../interfaces/index";
import { ClassService } from "../../services/API/class.service";
import React from "react";
import { PageContent } from "../../components/Layout/PageContent";

type Props = {
    classes: ClassData[];
};

export default function Listings({ classes }: Props) {
    // console.log("CLASS --", classes);
    return (
            <PageContent
                pageHeading="My Listings"
                pageSubHeading="List of classes you teach"
            >
                <div className="row y-gap-30">
                    <div className="col-xl-8 col-md-12">
                        <Card>
                            <Spacer />
                            <Tabs>
                                <TabList>
                                    <Tab fontWeight={"medium"}>Finished</Tab>
                                    <Tab fontWeight={"medium"}>Ongoing</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel p="0" py="5">
                                        <div className="row">
                                            {classes
                                                .sort(
                                                    (a, b) =>
                                                        new Date(
                                                            b.attributes.updatedAt,
                                                        ).valueOf() -
                                                        new Date(
                                                            a.attributes.updatedAt,
                                                        ).valueOf(),
                                                )
                                                .map((val) => {
                                                    return (
                                                        <EachClassListing
                                                            key={`listing-${val.id}`}
                                                            data={val}
                                                        />
                                                    );
                                                })}
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        {/* <MyClassesList data={ongoing} /> */}
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Card>
                    </div>
                    <div className="col-xl-4">
                        <Card>
                            <h4>Class Preview Here</h4>
                        </Card>
                    </div>
                </div>
            </PageContent>
    );
}


