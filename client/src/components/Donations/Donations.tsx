import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { getDonations } from '../../services/donations/getdonations';
import DonationProps from '../../modals/donations';

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});

export default function Donations() {

    const [ donations, setDonations ] = React.useState<DonationProps[]>();
    React.useEffect((): any => {
        let mounted = true;
        getDonations()
            .then(data => {
                if (mounted) {
                    setDonations(data)
                }
            })
        return () => mounted = false;
    }, []);

    const columns = [
        "Project ID",
        "Donations ID",
        "Donor ID",
        "Donation Included",
        "Donation Amount",
        "Donation Cart Sequence",
        "Donation Received Date"
    ];

    return (
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title={"Donations List"}
                    data={donations?.map(item => {
                        return [
                            item.project_id,
                            item.donation_id,
                            item.donor_id,
                            item.donation_included,
                            item.donation_amount,
                            item.donation_cart_sequence,
                            item.donation_received,
                        ]
                    })}
                    columns={columns}
                />
            </ThemeProvider>
        </CacheProvider>
    );
}

