function FileInput() {

    const handleFileChange = (e) =>{
        const file = e.target.files[0];
    console.log(file);
    }

    return (
        <input type="file" onChange={handleFileChange} />
    );

}

export default FileInput;
