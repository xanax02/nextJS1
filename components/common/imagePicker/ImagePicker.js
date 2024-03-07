import styles from './ImagePicker.module.css'

export default function ImagePicker({label, name}) {
    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <input
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                />
            </div>
        </div>
    )
}