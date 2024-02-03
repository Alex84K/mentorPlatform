import React from "react";
import MyInput from "./UI/input/MyInpyt";
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput value={filter.qery} onChange={e => setFilter({...filter, qery: e.target.value})} placeholder='Пoиск...' />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sort'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </div>
    )
}
export default PostFilter;