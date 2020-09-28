/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Category: { // root type
    _id: string; // ID!
    createdAt: string; // String!
    description: string; // String!
    products?: NexusGenRootTypes['Product'][] | null; // [Product!]
    title: string; // String!
  }
  Mutation: {};
  Order: { // root type
    _id: string; // ID!
    amount: number; // Float!
    createdAt: string; // String!
    product: NexusGenRootTypes['Product']; // Product!
    user: NexusGenRootTypes['User']; // User!
  }
  Product: { // root type
    _id: string; // ID!
    category: NexusGenRootTypes['Category']; // Category!
    createdAt: string; // String!
    description: string; // String!
    discount: number; // Float!
    price: number; // Float!
    title: string; // String!
  }
  Query: {};
  User: { // root type
    _id: string; // ID!
    createdAt: string; // String!
    email: string; // String!
    name: string; // String!
    orders?: NexusGenRootTypes['Order'][] | null; // [Order!]
    password?: string | null; // String
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
}

export interface NexusGenFieldTypes {
  Category: { // field return type
    _id: string; // ID!
    createdAt: string; // String!
    description: string; // String!
    products: NexusGenRootTypes['Product'][] | null; // [Product!]
    title: string; // String!
  }
  Mutation: { // field return type
    addCategory: NexusGenRootTypes['Category']; // Category!
    addProduct: NexusGenRootTypes['Product']; // Product!
    deleteCategory: NexusGenRootTypes['Category'] | null; // Category
    deleteProduct: NexusGenRootTypes['Product'] | null; // Product
    login: NexusGenRootTypes['User']; // User!
    logout: NexusGenRootTypes['User'] | null; // User
    register: NexusGenRootTypes['User']; // User!
    updateCategory: NexusGenRootTypes['Category'] | null; // Category
    updateProduct: NexusGenRootTypes['Product'] | null; // Product
  }
  Order: { // field return type
    _id: string; // ID!
    amount: number; // Float!
    createdAt: string; // String!
    product: NexusGenRootTypes['Product']; // Product!
    user: NexusGenRootTypes['User']; // User!
  }
  Product: { // field return type
    _id: string; // ID!
    category: NexusGenRootTypes['Category']; // Category!
    createdAt: string; // String!
    description: string; // String!
    discount: number; // Float!
    price: number; // Float!
    title: string; // String!
  }
  Query: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    category: NexusGenRootTypes['Category']; // Category!
    categoryProducts: NexusGenRootTypes['Product'][]; // [Product!]!
    getMe: NexusGenRootTypes['User']; // User!
    product: NexusGenRootTypes['Product']; // Product!
    products: NexusGenRootTypes['Product'][]; // [Product!]!
  }
  User: { // field return type
    _id: string; // ID!
    createdAt: string; // String!
    email: string; // String!
    name: string; // String!
    orders: NexusGenRootTypes['Order'][] | null; // [Order!]
    password: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addCategory: { // args
      description?: string | null; // String
      title?: string | null; // String
    }
    addProduct: { // args
      category?: string | null; // ID
      description?: string | null; // String
      discount?: number | null; // Float
      price?: number | null; // Float
      title?: string | null; // String
    }
    deleteCategory: { // args
      id?: string | null; // ID
    }
    deleteProduct: { // args
      id?: string | null; // ID
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    register: { // args
      email?: string | null; // String
      name?: string | null; // String
      password?: string | null; // String
    }
    updateCategory: { // args
      description?: string | null; // String
      id?: string | null; // ID
      title?: string | null; // String
    }
    updateProduct: { // args
      description?: string | null; // String
      discount?: number | null; // Float
      price?: number | null; // Float
      title?: string | null; // String
    }
  }
  Query: {
    category: { // args
      id?: string | null; // ID
    }
    categoryProducts: { // args
      category?: string | null; // ID
    }
    product: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Category" | "Mutation" | "Order" | "Product" | "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}