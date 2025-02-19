"use client"
import { useState } from "react";

export default function ListProduct({ result, categories }: any) {
    const [cate, setCate] = useState('')    
    
    return (
        <div>
            <select onChange={(e) => setCate(e.target.value)}>
                <option value="">All</option>
                {categories.map((category: any) => (
                    <option value={category}>{category}</option>
                ))}
            </select>
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                {result.products?.map((product: any) => {
                    if(cate === product.category || cate === '') {
                        return(
                            <li key={product.id} style={{ listStyle: 'none', width: '25%' }}>
                                <div
                                    style={{
                                        border: '1px solid #ccc',
                                        margin: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <div className="inner-img">
                                        <img src={product.thumbnail} alt={product.title} />
                                    </div>
                                    <div style={{ padding: '10px' }}>
                                        <div>
                                            <h3 style={{ textAlign: "center" }}>{product.title}</h3>
                                        </div>
                                        <div>
                                            <p>{product.description}</p>
                                            <p style={{ color: "red" }}>Price: {product.price}$</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }else{
                        return null
                    }
                })}
            </ul>
        </div>
    )
}