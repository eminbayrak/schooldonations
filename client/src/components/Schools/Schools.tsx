import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { getSchools } from '../../services/schools/getschools';
import SchoolsProps from '../../modals/schools';

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});

export default function Schools() {

    const [ Schools, setSchools ] = React.useState<SchoolsProps[]>();
    React.useEffect((): any => {
        let mounted = true;
        getSchools()
            .then(data => {
                if (mounted) {
                    setSchools(data)
                }
            })
        return () => mounted = false;
    }, []);

    const columns = [
        "School ID",
        "School Name",
        "School Metro Type", 
        "School Percentage", 
        "School State",
        "School City",
        "School County",
        "School Zip",
        "School District",
    ];

    return (
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title={"Schools List"}
                    data={Schools?.map(item => {
                        return [
                            item.school_id,
                            item.school_name,
                            item.school_metro_type,
                            item.school_percentage,
                            item.school_state,
                            item.school_city,
                            item.school_county,
                            item.school_zip,
                            item.school_district,
                        ]
                    })}
                    columns={columns}
                />
            </ThemeProvider>
        </CacheProvider>
    );
}

