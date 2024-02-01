import { Button } from 'antd'

export const CustomButton = ({ type, text, onClick, width, height }) => {
    return (
        <Button 
        style={{height: `${height}`, width: `${width}`, display: 'flex', alignItems: 'center', justifyContent: 'center'}} type={type} onClick={onClick}>{ text }</Button>
    )
}