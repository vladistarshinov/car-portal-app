import {FC, useState} from "react"
import Link from "next/link"
import Image from 'next/image'
import { styled } from "@mui/material/styles"
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography,
	Box,
	Hidden
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Rating from "@/shared/ui/rating/Rating"
import { genEndOfNoun } from "@/shared/libs/gen-end-of-noun"
import { IProduct } from "@/shared/api/types/product.types"

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<Card sx={{ my: 3, mx: 2, cursor: 'pointer' }}>
			<Link href={`/products/${product.slug}`}>
				<Box sx={{ width: '200px', height: '200px', position: 'relative', margin: '1rem auto' }}>
					<Image
						layout='fill'
						draggable={false}
						priority
						src={product.imageUrl}
						alt={product.title}
					/>
				</Box>
			</Link>
			<CardContent
				sx={{
					padding: "6px",
					height: "40px",
				}}
			>
				<Typography
					sx={{ textAlign: "center" }}
					variant="h5"
					color="text.muted"
				>
					{product.title}
				</Typography>
			</CardContent>
			<CardActions sx={{ flexDirection: "column" }} disableSpacing>
				<Box display="inline-flex" alignItems="center">
					<Rating value={product.rating} />
					<Typography sx={{ ml: 2 }} variant="body2">
						{product.countOfReviews}{" "}
						{genEndOfNoun(product.countOfReviews, "отзыв", "отзыва", "отзывов")}
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
					<Typography variant="h6" sx={{ textDecoration: 'line-through' }}>
						{product.oldPrice} RUB
					</Typography>
					<Typography variant="h5">{product.price} RUB</Typography>
				</Box>
			</CardActions>
		</Card>
	)
}

export default ProductCard
