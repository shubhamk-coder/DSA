# Python Code

from collections import Counter


def mostPurchased(products):
    products.sort()
    products_count = dict(Counter(products))
    max = 0
    rqd_product = []
    for i in products_count:
        if max < products_count[i]:
            max = products_count[i]
    for key, value in products_count.items():
        if max == value:
            rqd_product.append(key)
    print(rqd_product[-1])


# Driver Code:
products = ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat',
            'pinkHat', 'blackShirt', 'yellowShirt', 'greenPants', 'greenPants', 'greenPants']
mostPurchased(products)

## Output: greenPants
