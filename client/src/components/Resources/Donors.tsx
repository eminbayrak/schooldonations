import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { getDonors } from '../../services/donors/getdonors';
import DonorsProps from '../../modals/donors';

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});

export default function Donors() {

    const [ donors, setDonors ] = React.useState<DonorsProps[]>();
    React.useEffect((): any => {
        let mounted = true;
        getDonors()
            .then(data => {
                if (mounted) {
                    setDonors(data)
                }
            })
        return () => mounted = false;
    }, []);

    const columns = [
        "Donor ID",
        "Donor City",
        "Donor State",
        "Donor Teacher (Yes/No?)",
        "Donation Amount",
    ];

    return (
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title={"Donors List"}
                    data={donors?.map(item => {
                        return [
                            item.donor_id,
                            item.donor_city,
                            item.donor_state,
                            item.donor_is_teacher,
                            item.donor_zip,
                        ]
                    })}
                    columns={columns}
                />
            </ThemeProvider>
        </CacheProvider>
    );
}

