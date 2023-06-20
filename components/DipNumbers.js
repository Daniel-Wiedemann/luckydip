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

export default function DipNumbers({ min = 1, max = 49, amount = 6 }) {
    const [numberList, setNumberList] = useState([]);
    useEffect(() => setNumberList(randomIntInRange(min, max, amount)), []);
    function generateDip() {
        setNumberList(randomIntInRange(min, max, amount));
    }
    return (
        <>
            <Grid
                textAlign="center"
                style={{ backgroundColor: 'grey' }}
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
