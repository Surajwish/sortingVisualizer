import React, { useState } from 'react'
import Button from '@mui/material/Button';
import styles from './Top.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort } from '../Sortingmethods'

function Top({ arr, setArr }) {
    const [disable, setDisable] = useState(false)
    const [sort, setSort] = useState('BubbleSort');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    const handleStart = () => {
        setDisable(true)
        let delay;

        switch (sort) {
            case 'BubbleSort': {
                delay = bubbleSort(arr, setArr);
                break;
            }
            case 'InsertionSort': {
                delay = insertionSort(arr, setArr);
                break;
            }
            case 'SelectionSort': {
                delay = selectionSort(arr, setArr);
                break;
            }
            case 'MergeSort': {
                delay = mergeSort(arr, setArr);
                break;
            }
            case 'QuickSort': {
                delay = quickSort(arr, setArr);
                break;
            }
            default: break;

        }
        setTimeout(() => {
            setDisable(false)
        }, delay)
    }

    const handleShuffle = () => {
        let newArr = [];
        for (let i = 1; i <= 50; i++) {
            newArr.push(Math.floor(Math.random() * 100))
        }
        setArr(newArr)
    }
    return (
        <>
            <div id={styles.container}>
                <div id={styles.title}>
                    <h1>Sorting Visualizer</h1>
                    <h3>Copyright - Suraj Vishwakarma</h3>
                </div>
                <div id={styles.select}>
                    <InputLabel id='select-sort'>Sorting technique</InputLabel>
                    <Select
                        labelId="select-sort"
                        value={sort}
                        onChange={handleChange}
                    >
                        <MenuItem value='BubbleSort'>Bubble Sort</MenuItem>
                        <MenuItem value='InsertionSort'>Insertion Sort</MenuItem>
                        <MenuItem value='SelectionSort'>Selection Sort</MenuItem>
                        <MenuItem value='MergeSort'>Merge Sort</MenuItem>
                        <MenuItem value='QuickSort'>Quick Sort</MenuItem>
                    </Select>
                </div>
                <div id={styles.right}>
                    <Button variant='contained' disabled={disable} onClick={handleStart}>Start</Button>
                    <Button variant='contained' disabled={disable} onClick={handleShuffle}>Shuffle</Button>
                </div>
            </div>
        </>
    )
}

export default Top
