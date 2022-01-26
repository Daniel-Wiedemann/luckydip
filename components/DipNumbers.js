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
      <Grid centered>
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
        <GridColumn centered>
          <Button onClick={generateDip} color="yellow" primary>
            Dip
          </Button>
        </GridColumn>
      </Grid>
    </>
  );
}
