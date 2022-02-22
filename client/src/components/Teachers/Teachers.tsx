import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { getTeachers } from '../../services/teachers/getteachers';
import TeachersProps from '../../modals/teachers';

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});

export default function Teachers() {

    const [ teachers, setTeachers ] = React.useState<TeachersProps[]>();
    React.useEffect((): any => {
        let mounted = true;
        getTeachers()
            .then(data => {
                if (mounted) {
                    setTeachers(data)
                }
            })
        return () => mounted = false;
    }, []);

    const columns = [
        "Teacher ID",
        "Teacher Prefix",
        "Teacher First Project Posted Date",
    ];

    return (
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                    title={"Teachers List"}
                    data={teachers?.map(item => {
                        return [
                            item.teacher_id,
                            item.teacher_prefix,
                            item.teacher_first_project_posted_date,
                        ]
                    })}
                    columns={columns}
                />
            </ThemeProvider>
        </CacheProvider>
    );
}

