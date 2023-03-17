import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native'

const StripeApp = () => {
  return (
    <StripeProvider publishableKey='pk_test_51IlaJaSE2LpFM67yMcRTvedd9N67cLfodcotYP4OMd4CgeVYSwaxDLbDXA9eGnAZQPUTVk4gvj6LJFkMrrVDFmtQ00wBSSgD75'>
         <Text>StripeApp</Text>
    </StripeProvider>
     
    
  )
}

export default StripeApp

const styles = StyleSheet.create({})