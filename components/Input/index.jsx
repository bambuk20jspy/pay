import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import styles from './Input.module.scss';

export const Input = ({
    placeholder, 
    type, 
    name, 
    className, 
    fullWidth, 
    onChangeHandle, 
    min, 
    max,
    label,
    control,
    errors,
    dateInp,
    value
}) => {

    return (
        <>
            <label className={styles.label}>{label}</label>
            <Controller
                control={control}
                name={name}
                rules={{required: true, 
                    minLength: {value: min},
                    maxLength: {value: max}
                }}
                render={({ field }) => (
                    dateInp ? (
                        <MobileDatePicker
                            views={["month", "year"]}
                            inputFormat="MM/yyyy"
                            value={field.value}
                            onChange={(event) => {
                                onChangeHandle ? onChangeHandle() : null
                                field.onChange(event)
                            }}
                            variant='standard'
                            renderInput={
                                (params) => (
                                    <TextField 
                                        {...params}
                                        variant='standard'
                                        className={styles.inp_style}
                                        sx={{background: '#fff'}}
                                    />)
                                }
                            InputProps={
                                { disableUnderline: true }
                            }      
                        />
                    ) : (
                        <TextField
                            placeholder={placeholder} 
                            type={type}
                            sx={{background: '#fff'}}
                            value={field.value}
                            fullWidth={fullWidth}
                            variant='standard'
                            className={styles.inp_style}
                            onChange={(event) => {
                                onChangeHandle ? onChangeHandle(event) : null;
                                field.onChange(event)
                            }}
                            InputProps={
                                { disableUnderline: true }
                            }
                            error={!!errors.CardNumber?.message}
                            helperText={errors.CardNumber?.message}
                        />
                    )
                )}
            />
        </>
    )
}
