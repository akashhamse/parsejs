//RELATION one to one

const businessInstance = parseUtils.instance('Business');
      businessInstance.set("name", 'bata');

      const productInstance = parseUtils.instance('Product');
      productInstance.set("name", 'product1');
      productInstance.set("business", businessInstance);

      const savedSettings = await productInstance.save(null, parseUtils.sessTok(user))
      return { data: savedSettings.toJSON() }
