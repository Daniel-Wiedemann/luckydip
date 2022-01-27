import { randomIntInRange } from 'api/RandomNumbers';
import { useEffect, useState } from 'react';
import {
    Button,
    Grid,
    GridColumn,
    GridRow,
    Statistic,
    StatisticGroup,
    StatisticValue,
} from 'semantic-ui-react';

export default function DipNumbers() {
    const [numberList, setNumberList] = useState([]);
    useEffect(() => setNumberList(randomIntInRange(1, 49, 6)), []);
    function generateDip() {
        setNumberList(randomIntInRange(1, 49, 6));
    }
    return (
        <>
            <Grid
                textAlign="center"
                style={{ height: '100vh', backgroundColor: 'grey' }}
                verticalAlign="middle"
            >
                <GridColumn color="grey">
                    <GridRow centered columns={8} color="grey">
                        <StatisticGroup>
                            {numberList
                                .sort((a, b) => a - b)
                                .map((i, j) => (
                                    <Statistic color="yellow" key={j}>
                                        <StatisticValue>{i}</StatisticValue>
                                    </Statistic>
                                ))}
                        </StatisticGroup>
                    </GridRow>
                    <GridRow>
                        <Button onClick={generateDip} color="yellow" primary>
                            Dip Dip Dip Hooray
                        </Button>
                    </GridRow>
                </GridColumn>
            </Grid>
        </>
    );
}
