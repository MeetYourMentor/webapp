import { Checkbox } from "@fluentui/react";
import { GroupedList, IGroup } from "office-ui-fabric-react/lib/GroupedList";
import { useEffect, useState } from "react";
import { MockMentorService } from "../../services/MockMentorService";
import { Selection, SelectionMode, SelectionZone } from '@fluentui/react/lib/Selection';
import { useConst } from '@fluentui/react-hooks';

export const SearchOptions = () => {
    const [searchOptions, setSearchOptions] = useState<any[]>([]);
    const [groupsData, setGroupsData] = useState<any[]>([]);
    const [options, setOptions] = useState<any[]>([]);

    // Load mock data from mock data service
    useEffect(() => {
        const mockDataClient = new MockMentorService();
        mockDataClient.getSearchOptionsMockData().then((results) => {
            setSearchOptions(results);
        });
        mockDataClient.getGroupMockData().then((results) => {
            setGroupsData(results);
        });
        mockDataClient.getOptionsMockData().then((results) => {
            setOptions(results);
        });
    });

    const selection = useConst(() => {
        const s = new Selection();
        s.setItems(searchOptions, true);
        return s;
    });

    const groups: IGroup[] = [];

    groupsData.map((group, index) => {
        groups.push({
            key: group.title,
            name: group.title,
            startIndex: index + group.offset,
            count: group.size,
        })
    })

    const onRenderCell = (
        nestingDepth?: number,
        item?: any,
        itemIndex?: number,
        group?: IGroup,
    ): React.ReactNode => {
        return <Checkbox className="checkbox" label={item} />
    };


    return (
        <SelectionZone selection={selection} selectionMode={SelectionMode.none}>
            <GroupedList
                className="groupedList"
                items={options}
                groups={groups}
                onRenderCell={onRenderCell}
                selection={selection}
                selectionMode={SelectionMode.none}
                compact={true}
            />
        </SelectionZone>
    );
}
